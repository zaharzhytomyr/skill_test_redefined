export const validateSignupForm = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Please Enter Your Name.";
    } else if(!(values.name.trim())) {
      errors.name = "Please Do Not Enter Only Spaces.";
    }
    if (!values.email) {
      errors.email = "Please Enter Your Email.";
    }
    if (!values.email) {
      errors.email = "Please Enter Your Email.";
    } else if(!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Please Enter Correct Email.";
    }
    if (!values.password) {
      errors.password = "Please Enter Your Password.";
    }
    if (!values.confirm_password) {
      errors.confirm_password = "Please Confirm Your Password.";
    } else if (!(values.password === values.confirm_password)) {
      errors.confirm_password = "Passwords do not match.";
    }
    if (values.type === "student") {
      if(!values.college) {
        errors.college = "Please Enter Your Colledge.";
      }
    } else {
      if(!values.company) {
        errors.company = "Please Enter Your Company."
      }
    }
    if (!values.skills.length) {
      errors.skills = "Please Enter Your Skills."
    }

    return errors;
  }

export const validateLoginForm = (values) => {
    const errors = {};
    if(!values.email){
      errors.email = 'Please Enter Your Name.';
    } else if(!values.email.trim()) {
      errors.email = 'Please Do Not Enter Only Spaces.';
    } else if(!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Please Enter Correct Email.";
    }
    if (!values.password) {
      errors.password = 'Please Enter Your Password.';
    }
    return errors;
  }
