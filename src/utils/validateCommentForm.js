export const validateCommentForm = (values) =>{
    const errors = {};
    const {rating,author} = values;

    // rating validation exists
    if(!rating){
        errors.rating='Required';
    }

    // author validation between length 2 to 15
    if(author.length<2){
        errors.author = 'Must be atleast 2 charcters';
    }else if(author.length>=15){
        errors.author='Must be 15 characters or less.';
    }
    return errors;
}