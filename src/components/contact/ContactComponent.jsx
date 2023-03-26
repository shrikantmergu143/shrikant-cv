import React, { useState, useEffect } from 'react'
import portfolio1 from "./../../template/media/figure/map.png"
import Firebase, { db } from "./../../firebase/Firebase";
function validMail(mail){
    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(mail);
}
function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }
  
export default function ContactComponent() {
    const [formData, setFormData] = useState({
        fullname:"",
        email:"",
        subject:"",
        message:"",
    });
    const [errors, setErrors] = useState({
        fullname:"",
        email:"",
        subject:"",
        message:"",
    });
    const onChanges = (e) =>{
        setErrors({...errors,[e.target.name]:""})
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    // useEffect(() => {
    //     db.collection("users").get().then(console.log)
    // }, [])
    const validate = () =>{
        let value = true;
        if(!validMail(formData?.email)){
            errors.email = "Enter your valid email id";
            value = false;
        }
        if(formData?.fullname === ""){
            errors.fullName = "Enter your full name";
            value = false;
        }
        if(formData?.email  === ""){
            errors.email = "Enter your email address";
            value = false;
        }
        if(formData?.subject  === ""){
            errors.subject = "Enter a subject";
            value = false;
        }
        if(formData?.message === ""){
            errors.message = "Enter your message";
            value = false;
        }
        setErrors({
            ...errors,
            fullname: errors.fullName,
            email: errors.email,
            subject: errors.subject,
            message: errors.message,
        });
        return value;
    }
    const CallSubmitData =async (e) =>{
        e.preventDefault();
        console.log("validate",validate() )

        if(validate()){
            const id = uuidv4();
            Firebase.auth().onAuthStateChanged(async(user) => {
                if (user) {
                  db.collection("users").doc(id).set({...formData,id:id,})
                } else {
                    Firebase.auth().signInWithEmailAndPassword("user@gmail.com", "user123")
                  .then((userCredential) => {
                    db.collection("users").doc(id).set({...formData,id:id,})
                  })
                  .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // ..
                  });
                }
            });
        }
    }
  return (
    <section className="fxt-contact-section bg-color-1" id="section8" style={{backgroundImage: `url(${portfolio1})`}}>
        <div className="container">
            <div className="fxt-heading-layout1">
                <h2 className="heading-title">Contact Me</h2>
                <div hidden className="heading-paragraph">There are many variations of passages of Lorem Ipsum available</div>
                <div className="heading-line"></div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-12">
                    <div className="fxt-contact-box-layout1">
                        <div className="contact-list">
                            <div className="item-icon">
                                <i className="flaticon-placeholder"></i>
                            </div>
                            <div className="item-content">
                                <h3 className="item-title">Address</h3>
                                <div className="item-text">267/58 Raviwar peth,</div>
                                <div className="item-text">Solapur - 413005 Maharashtra, India</div>
                            </div>
                        </div>
                        <div className="contact-list">
                            <div className="item-icon">
                                <i className="flaticon-email"></i>
                            </div>
                            <div className="item-content">
                                <h3 className="item-title">Email:</h3>
                                <div className="item-text">shrikantmergu143@gmail.com</div>
                            </div>
                        </div>
                        <div className="contact-list">
                            <div className="item-icon">
                                <i className="flaticon-telephone"></i>
                            </div>
                            <div className="item-content">
                                <h3 className="item-title">Phone</h3>
                                <div className="item-text">+91 9028309906</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <div className="fxt-contact-box-layout2">
                        <form onSubmit={CallSubmitData}>
                            <div className="row">
                                <div className="col-lg-12 form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Full Name"
                                        name="fullname"
                                        value={formData?.fullname}
                                        onChange={onChanges}
                                    />
                                    <div className="help-block with-errors">{errors?.fullname}</div>
                                </div>
                                <div className="col-lg-6 form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="E-mail"
                                        name="email"
                                        value={formData?.email}
                                        onChange={onChanges}
                                    />
                                    <div className="help-block with-errors">{errors?.email}</div>
                                </div>
                                <div className="col-lg-6 form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Subject"
                                        name="subject"
                                        data-error="Subject field is required"
                                        value={formData?.subject}
                                        onChange={onChanges}
                                    />
                                        <div className="help-block with-errors">{errors?.subject}</div>
                                </div>
                                <div className="col-lg-12 form-group">
                                    <textarea
                                        name="message"
                                        id="form-message"
                                        className="form-control textarea"
                                        placeholder="Your Message"
                                        rows="7"
                                        data-error="Message field is required"
                                        value={formData?.message}
                                        onChange={onChanges}
                                    ></textarea>
                                        <div className="help-block with-errors">{errors?.message}</div>
                                </div>
                                <div className="col-lg-12 form-group">
                                    <button type="submit" className="btn-fill submit-btn">SEND MESSAGE</button>
                                </div>
                            </div>
                            <div className="form-response"></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
