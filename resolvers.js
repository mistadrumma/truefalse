module.exports = {
    Query: {
        getPost: async (_, args, {Post}) => {
            const posts = await Post.find({}).sort({createdDate: 'desc'}).populate({
                path: 'createdBy',
                model: 'User'
            });
            return posts;

        }
    },
    Mutation: {
        addPost: async (_, {title, imageUrl, categories, description, creatorID}, {Post}) => {
            const newPost = await new Post({
                title, 
                imageUrl, 
                categories, 
                description,
                createdBy: creatorID
            }).save();
            return newPost;
        },
       signupUser: async (_, {username, email, password}, {User}) => {
           const user = await User.findOne({ username });
           if (user) {
               throw new Error('User already exists')
           }
           const newUser = new User({
               username,
               email,
               password
           }).save();
           return newUser;
       } 
    }
}