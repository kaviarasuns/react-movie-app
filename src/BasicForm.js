import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as yup from "yup";

const formValidationShema = yup.object({
  email: yup.string().email().required().min(8),
  password: yup.string().min(8).max(12).required("Why not fill this password"),
});


export function BasicForm() {
  const {handleSubmit, values, handleChange, handleBlur, touched, errors} = useFormik({
    initialValues: {email : "Martin" , password: "abcasdf"},
    validationSchema: formValidationShema,
    onSubmit: (values) => {
      console.log("onSubmit", values);
    }
  });
  return (
    <form onSubmit={handleSubmit}>
      <input  type="email" placeholder="Email" name="email" value={values.email} 
      onChange={handleChange}
      onBlur={handleBlur}
      />
      {touched.email && errors.email ? errors.email : ""}
      <input  type="password" placeholder="Password" name="password" value={values.password} 
      onChange={handleChange} 
      onBlur={handleBlur}/>
      {touched.password && errors.password ? errors.password : ""}
      <button type="submit">Submit</button>

      {/* <p>{JSON.stringify(values)}</p>
      <p>{JSON.stringify(touched)}</p> */}
    
    </form>
  );
}














// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import { useFormik } from 'formik';
// import * as yup from "yup";

// const formValidationShema = yup.object({
//   email: yup.string().email().required().min(8),
//   password: yup.string().min(8).max(12).required("Why not fill this password"),
// });


// export function BasicForm() {
//   const formik = useFormik({
//     initialValues: {email : "Martin" , password: "abcasdf"},
//     validationSchema: formValidationShema,
//     onSubmit: (values) => {
//       console.log("onSubmit", values);
//     }
//   });
//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <input  type="email" placeholder="Email" name="email" value={formik.values.email} 
//       onChange={formik.handleChange}
//       onBlur={formik.handleBlur}
//       />
//       {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
//       <input  type="password" placeholder="Password" name="password" value={formik.values.password} 
//       onChange={formik.handleChange} 
//       onBlur={formik.handleBlur}/>
//       {formik.touched.password && formik.errors.password ? formik.errors.password : ""}
//       <button type="submit">Submit</button>
//       <p>{JSON.stringify(formik.values)}</p>
//       <p>{JSON.stringify(formik.touched)}</p>
//     </form>
//   );
// }
