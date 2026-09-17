import { useRef, useState, type FormEvent } from "react";

interface formDetails {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<formDetails>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const subject = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nameValue = name.current!.value;
    const emailValue = email.current!.value;
    const subjectValue = subject.current!.value;
    const messageValue = message.current!.value;

    setFormData({
      name: nameValue,
      email: emailValue,
      subject: subjectValue,
      message: messageValue,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <legend style={{ textAlign: "center" }}>Contact Form</legend>
      <div style={{ display: "flex", backgroundColor: "gray" }}>
        <div>
          <input
            type="text"
            placeholder="Input name"
            ref={name}
            style={{ margin: "20px", width: "100%" }}
          />
          <br />
          <input
            type="email"
            placeholder="Input email"
            ref={email}
            style={{ margin: "20px", width: "100%" }}
          />
          <br />
          <input
            type="text"
            placeholder="Input subject"
            ref={subject}
            max={20}
            style={{ margin: "20px", width: "100%" }}
          />
          <br />
          <input
            type="text"
            placeholder="Input message"
            ref={message}
            style={{ margin: "20px", width: "100%" }}
          />
          <br />

          <button type="submit" style={{ margin: "20px" }}>
            Submit
          </button>
        </div>

        <div style={{ margin: "auto", fontFamily: "sans-serif" }}>
          <h3 style={{ color: "white" }}>Contact Details</h3>
          <p>
            Name:{" "}
            <span style={{ fontWeight: "bold", color: "white" }}>
              {formData.name}
            </span>
          </p>
          <p>
            Email: <span style={{ color: "white" }}>{formData.email}</span>
          </p>
          <p>
            Subject: <span style={{ color: "white" }}>{formData.subject}</span>
          </p>
          <p>
            Message: <span style={{ color: "white" }}>{formData.message}</span>
          </p>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
