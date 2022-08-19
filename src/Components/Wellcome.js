import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';

const Wellcome = () => {
  const {user,userType,setUser,messType,setMesstype} = useContext(UserContext);
  const navigate = useNavigate(""); 
  // const [selected, setSelected] = useState([]);
  const options = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },

  ]
  const logout=()=>{
    setUser('');
    navigate('/')

  }

  const formik = useFormik({
    initialValues: {
      Id: '',
      Name: '',
      Message : '',
      Batch: '',
      messageType: '',
    },
    validationSchema: Yup.object({
        Id:Yup.string().min(5,"Too Short!").max(50,"Too Long!").required('Enter the Template ID *').matches("^[a-zA-Z0-9]*$","Must in Alpha Numeric only *"),
        Name:Yup.string().min(10,"Too Short!").max(20,"Too Long!").required('Enter Template Name *').matches("[A-Za-zÀ-ȕ0-9(),-_., ]","Must in  Alpha Numeric with special charecter"),
        Message:Yup.string().min(10,"Too Short!").max(20,"Too Long!").required('Fill the Message box *').matches("^[a-zA-Z0-9]*$","Must in Alpha Numeric only *"),
        // Batch:Yup.number().min(3,"Too Short!").max(5,"Too Long!").required('Enter Numeric value*'),
        messageType:Yup.number().required("Select the Message Type *")

       
    }),
    onSubmit: values => {
      saveHandeler(values);
      
    },
  });


async  function saveHandeler(value){

  console.log(value);   
  alert('submitted succefully')
 
}

  const typeSelection = (value)=>{
    let data = value.toString()
    setMesstype(data)
    
   
  }

  return <>
   <div className='container'>
   <div className='header'>
      <h1>Welcome {user} as a {userType} !!</h1>
      <div><button className='btn btn-danger' onClick={()=>logout()}>Logout</button></div>
    </div>
    <h5 className='text-center'>Create a form with subfield and validations (Task-2)</h5>
    <div className='d-flex justify-content-center mb-5' >
    <form className='col-8' onSubmit={formik.handleSubmit}>
    <label for="name">Template Id</label>
    <input
        id="Id"
        name="Id"
        type="text"
        className="form-control"
        onChange={formik.handleChange}
        value={formik.values.Id}
    />
    {formik.touched.Id && formik.errors.Id?(<div style={{color:"red"}}>{formik.errors.Id}</div>):null}
    <br></br>
    <label for="Name">Template Name</label>
    <input
        id="Name"
        name="Name"
        type="text"
        className="form-control"
        onChange={formik.handleChange}
        value={formik.values.Name}
    />
        {formik.touched.Name && formik.errors.Name?(<div style={{color:"red"}}>{formik.errors.Name}</div>):null}
        <br></br>
        <label for="Message ">Message</label>
        <input
        id="Message"
        name="Message"
        type="text"
        className="form-control"
        onChange={formik.handleChange}
        value={formik.values.Message}
    />
    {formik.touched.Message && formik.errors.Message?(<div style={{color:"red"}}>{formik.errors.Message}</div>):null}
    <br></br>
    <select
     id='messageType'
     name='messageType'
     className="form-select"
      onChange={formik.handleChange}
      onClick={(e)=>typeSelection(e.target.value)}
      value={formik.values.messageType} 
      aria-label="Default select example">
      <option selected>message type selection</option>
      <option value="0100">0100</option>
      <option value="0200">0200</option>
      <option value="0400">0400</option>
      <option value="0500">0500</option>
      <option value="0800">0800</option>

    </select>
    {formik.touched.messageType && formik.errors.messageType?(<div style={{color:"red"}}>{formik.errors.messageType}</div>):null}

        <br></br>
         <div>
          
      {(() => {
         switch(messType) {
          case "0100":
            return <><h4>SubForm</h4>
                   <select  class="form-select" >
                         <option selected>Message Format</option>
                         <option value="JSON">JSON</option>
                         <option value="ISO">ISO</option>
                   </select>
                   <br></br>
                   <select  class="form-select" >
                         <option selected>Message Header Format</option>
                         <option value="OBN">OBN</option>
                         <option value="2BN">2BN</option>
                   </select>
                   <br></br>
                   <Select options={options} isMulti />
             </>
          case "0200":
            return<> <h4>SubForm</h4>
                    <select  class="form-select" >
                         <option selected>Message Format</option>
                         <option value="JSON">JSON</option>
                         <option value="ISO">ISO</option>
                    </select>
                    <br></br>
                    <select  class="form-select" >
                          <option selected>Message Header Format</option>
                          <option value="OBN">OBN</option>
                          <option value="2BN">2BN</option>
                    </select>
                     <br></br>
                    <Select options={options} isMulti />
                    <br></br>
                    <label>IsDecline :  </label>
                    <span> True </span>
                    <input name="boolean" type="radio" value="true" />
                    &nbsp; &nbsp;
                    <span> False </span>
                    <input name="boolean" type="radio" value="false" /></>
          case '0400':
            return <> <h4>SubForm</h4>
                    <select  class="form-select" >
                          <option selected>Message Format</option>
                          <option value="JSON">JSON</option>
                          <option value="ISO">ISO</option>
                    </select>
                    <br></br>
                    <select  class="form-select" >
                          <option selected>Message Header Format</option>
                          <option value="OBN">OBN</option>
                          <option value="2BN">2BN</option>
                    </select>
                    <br></br>
                    <Select options={options} isMulti />
                      <br></br>
                    <label>orgShould Present :  </label>
                    <span> True </span>
                    <input name="boolean" type="radio" value="true" />
                    &nbsp; &nbsp;
                    <span> False </span>
                    <input name="boolean" type="radio" value="false" /></>
          case "0500":
            return  <><h4>SubForm</h4>
                    <select  class="form-select" >
                          <option selected>Message Format</option>
                          <option value="JSON">JSON</option>
                          <option value="ISO">ISO</option>
                    </select>
                    <br></br>
                    <select  class="form-select" >
                          <option selected>Message Header Format</option>
                          <option value="OBN">OBN</option>
                          <option value="2BN">2BN</option>
                    </select>
                    <br></br>
                    <Select options={options} isMulti />
                     <br></br>
                     <label for="Batch ">Batch No</label>
                      <input
                      id="Batch"
                      name="Batch"
                      type="number"
                      class="form-control"
                      onChange={formik.handleChange}
                      value={formik.values.Batch}
                  />
                  {formik.touched.Batch && formik.errors.Batch?(<div style={{color:"red"}}>{formik.errors.Batch}</div>):null}
            </>        
          default:
            return null
        }
      })()}
      </div>
        <br></br>
        <button className="btn btn-primary" type="submit">Submit</button>
    </form>
    </div>
    </div>
  </>
}

export default Wellcome