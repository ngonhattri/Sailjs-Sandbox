module.exports = {


  friendlyName: 'Create',


  description: 'Create post.',


  inputs: {
    title: {
      description: 'Title of your object',
      type: 'string',
      required: true
    },
    postBody: {
      type: 'string',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs) {

    console.log("We are now inside of post/inside action")
    await Post.create({title: inputs.title, body: inputs.postBody})
    return;

  }


};
