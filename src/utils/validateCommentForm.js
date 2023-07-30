export const validateCommentForm = (values) =>{
    const errors = {};

    // rating validation exists
    if(!values.rating){
        errors.rating='Required';
    }

    // author validation between length 2 to 15
    if(values.author.length<2){
        errors.author = 'Must be atleast 2 charcters';
    }else if(values.author.length>=15){
        errors.author='Must be 15 characters or less.';
    }
    return errors;
}