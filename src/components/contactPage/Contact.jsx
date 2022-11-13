import React, { useRef , useCallback } from "react";

const Contact = () => {
  const nameInputElement = useRef();
  const emailInputElement = useRef();
  const feedbackInputElement = useRef();

  const formHandler = useCallback(() => (event) =>{
      event.preventDefault()
      console.log('Here')
      const data = {
        name : nameInputElement.current?.value,
        email : emailInputElement.current?.value,
        feedback : feedbackInputElement.current?.value
      }

      nameInputElement.current.value = ""
      emailInputElement.current.value = ""
      feedbackInputElement.current.value = ""
    

      console.log(data);
  })
  

  return (
    <section id="contact" className="relative w-screen min-h-screen  gap-16 flex justify-center items-center">
      <div className="contactLeft max-[900px]:hidden relative w-96 h-[540px] max-[1200px]:scale-90 max-[1200px]:translate-x-16 shadow-skills rounded-lg flex  justify-center items-center">
        <img
          src="/images/contactPage/mike.png"
          alt=""
          className="bottom-7 relative scale-150"
        />
      </div>
      <div className="contactRight max-sm:top-14 relative w-[700px]  h-[540px] max-[1200px]:scale-90  shadow-skills rounded-lg flex justify-start flex-col gap-6 items-center">
        <h1 className="relative top-8 font-pacifico text-3xl text-purple font-semibold">
          Contact Me
        </h1>
        <form
          onSubmit={formHandler()}
          className="relative w-full px-24 max-[1200px]:px-14 font-leaguespartan flex flex-col gap-4 py-4 "
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            ref={nameInputElement}
            name="username"
            id="name"
            required
            className="w-full focus:outline-none  h-10 rounded-lg bg-lightWhite px-5 py-1"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            ref={emailInputElement}
            id="email"
            required
            className="w-full focus:outline-none h-10 rounded-lg bg-lightWhite px-5 py-1"
          />
          <label htmlFor="feedback">Feedback</label>
          <textarea
            name="feedback"
            ref={feedbackInputElement}
            id="feedback"
            rows="5"
            required
            className="w-full focus:outline-none resize-none rounded-lg bg-lightWhite px-5 py-2"
          />
          <button type="submit" className="absolute -bottom-14 right-8 w-24 h-10 text-center text-white rounded-lg bg-purple">SUBMIT</button>
        </form>
      </div>

     
      <footer className="absolute bottom-0 w-full h-10 flex justify-center items-center text-white  font-leaguespartan bg-lightWhite">
          <h3>copyright @2022</h3>
      </footer>
    </section>
  );
};

export default Contact;
