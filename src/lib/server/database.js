import { initializeApp } from '@firebase/app';
import { ChatGPTAPI } from 'chatgpt';
import { getFirestore, query, where, collection, getDoc, updateDoc, addDoc, doc, getDocs, serverTimestamp, increment, arrayUnion, arrayRemove } from '@firebase/firestore/lite';

const USERCOLLECTION = "users";
const POSTCOLLECTION = "posts";

const firebaseConfig = {
  apiKey: "AIzaSyApWk-rMCRp2HxOPmMnDSeDOvYUNDMtdac",
  authDomain: "cissa-fy.firebaseapp.com",
  projectId: "cissa-fy",
  storageBucket: "cissa-fy.appspot.com",
  messagingSenderId: "1035170619308",
  appId: "1:1035170619308:web:2d2d8ed131e989a1fde409"
};
const chatgptConfig = {
    apiKey: process.env.OPENAI_APIKEY || ""
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const chat = new ChatGPTAPI(chatgptConfig);

/** Get a list of posts matching a tag from your database
 * @param {string} tag - The tag to search
 */
export async function getPostsFromTag(tag) {
  const maybePosts = query(collection(db, "posts"), where ("tags", "array-contains", tag))
  const posts = await getDocs(maybePosts);
  // Note that there may be zero documents returned
  return posts;
}

/**
 * @param {string} userID - Unique user ID
 * @param {string} post - Post to add
 * @param {object} opts - Some options
 * @param {Array<string>} opts.tags - Tags
 */
export async function addPost(userID, post, opts) {
    await addDoc(collection(db, "posts"), {
        body: post,
        "date-created": serverTimestamp(),
        "date-modified": serverTimestamp(),
        "num-of-likes": 0,
        "user-created": `${USERCOLLECTION}/${userID}`,
        tags: opts.tags || [],
    })
}

/**
 * @param {string} username - Expected username
 */
export async function addUser(username) {
    await addDoc(collection(db, "users"), {
        friends: [],
        "joined-date": serverTimestamp(),
        "liked-posts": [],
        name: username,
        utility: 0,
    })
}

/**
 * @param {string} userID - Identification
 * @param {string} friendID - Friend ID
 */
export async function addFriend(userID, friendID) {
    let userDoc = doc(db, "users", userID);
    const currentUser = await getDoc(userDoc);
    const friendUser = await getDoc(doc(db, "users", friendID));
    
    if (!currentUser.exists() || !friendUser.exists()) { return }

    updateDoc(userDoc, { friends: arrayUnion(`${USERCOLLECTION}/${friendID}`)})
}

/**
 * @param {string} userID
 */
export async function getUserPosts(userID) {
    const maybePosts = query(collection(db, "posts"), where("user-created", "==", `${USERCOLLECTION}/${userID}`))
    const posts = await getDocs(maybePosts);
    // Note that there may be zero documents returned
    return posts;
}

/**
 * @param {string} userID
 * @param {string} postID
 */
export async function likePost(userID, postID) {
    let user = doc(db, "posts", userID);
    let docuser = await getDoc(user);
    let post = doc(db, "posts", postID);
    let docpost = await getDoc(post);

    if (docuser.exists() && docpost.exists()) {
        updateDoc(post, { "num-of-likes": increment(1) })
    }
}

/**
 * @param {string} userID
 * @param {string} postID
 */
export async function dislikePost(userID, postID) {
    let user = doc(db, "posts", userID);
    let docuser = await getDoc(user);
    let post = doc(db, "posts", postID);
    let docpost = await getDoc(post);

    if (docuser.exists() && docpost.exists()) {
        updateDoc(user, { "liked-posts": arrayRemove(`${POSTCOLLECTION}/${postID}`) })
        updateDoc(post, { "num-of-likes": increment(-1) })
    }
}

/**
 * @param {string} userID
 * @param {number} num
 */
export async function getRecommendedPosts(userID, num) {
    let posts = [];
    for (var i = 0; i < num; i++) {
        posts.push(getRecommendedPost(userID))
    }
    posts
}

function getRecommendedPost(_) {
    {
        body: chat.sendMessage("Imagine you're a person who regularly browses twitter. What is a common news item that you might post?")
    }
}

export async function searchForUsers(userID) {
}