import { observable, action, makeObservable, computed } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

class Store {
    posts = [
        {
            id: uuidv4(),
            title: 'A Busy Bee',
            content: 'I guess we could discuss the implications of the phrase "meant to be." That is if we wanted to drown ourselves in a sea of backwardly referential semantics and other mumbo-jumbo. Maybe such a discussion would result in the determination that "meant to be" is exactly as meaningless a phrase as it seems to be, and that none of us is actually meant to be doing anything at all. But thats my existential underpants underpinnings showing. Its the way the cookie crumbles. And now I want a cookie. '
        },
        {
            id: uuidv4(),
            title: 'On the Same Page',
            content: 'They needed to find a place to eat. The kids were beginning to get grumpy in the back seat and if they didnt find them food soon, it was just a matter of time before they were faced with a complete meltdown. Even knowing this, the solution wasnt easy. Everyone in the car had a different opinion on where the best place to eat would be with nobody agreeing with the suggestions of the others. It seemed to be an impossible no-win situation where not everyone would be happy no matter where they decided to eat which in itself would lead to a meltdown. Yet a decision needed to be made and it needed to be made quickly. '
        },
        {
            id: uuidv4(),
            title: 'Back To the Drawing Board',
            content: `What was beyond the bend in the stream was unknown. Both were curious, but only one was brave enough to want to explore. That was the problem. There was always one that let fear rule her life.`
        },
        {
            id: uuidv4(),
            title: 'Par For the Course',
            content: `They needed to find a place to eat. The kids were beginning to get grumpy in the back seat and if they didn't find them food soon, it was just a matter of time before they were faced with a complete meltdown. Even knowing this, the solution wasn't easy. Everyone in the car had a different opinion on where the best place to eat would be with nobody agreeing with the suggestions of the others.`
        }
    ]

    avatar = 'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'

    username = 'Jane Doe'

    constructor() {
        makeObservable(this, {
            posts: observable,
            avatar: observable,
            postsLength: computed,
            addPost: action,
            editPost: action,
            deletePost: action,
            changeAvatar: action
        })
    }

    get postsLength() {
        return this.posts.length
    }

    deletePost(id) {
        this.posts = this.posts.filter((post) => post.id !== id)
    }

    addPost(post) {
        this.posts.push({ id: uuidv4(), ...post })
    }

    editPost(editedPost) {
        this.posts = this.posts.map((post) => {
            if (post.id === editedPost.id) {
                return { ...post, title: editedPost.title, content: editedPost.content }
            } else {
                return post
            }
        })
    }

    changeAvatar(newAvatar) {
        this.avatar = newAvatar
    }
}

const store = new Store()
export default store