import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Form.module.css";

const Form = () => {
  const [focusedField, setFocusedField] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      form.reset();
      setFocusedField("");
    } catch (error) {
      console.error("Netlify form submission failed", error);
    }
  };

  return (
    <form
      className={styles.form}
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />

      <div
        className={`${styles.formElement} ${focusedField === "name" ? styles.focused : ""}`}
      >
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onFocus={() => setFocusedField("name")}
          onBlur={() => setFocusedField("")}
        />
        <span className={styles.errorMessage}>This field is required</span>
      </div>

      <div
        className={`${styles.formElement} ${focusedField === "email" ? styles.focused : ""}`}
      >
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onFocus={() => setFocusedField("email")}
          onBlur={() => setFocusedField("")}
        />
        <span className={styles.errorMessage}>This field is required</span>
      </div>

      <div
        className={`${styles.formElement} ${styles.fullWidth} ${focusedField === "message" ? styles.focused : ""}`}
      >
        <label htmlFor="message">Your message...</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          onFocus={() => setFocusedField("message")}
          onBlur={() => setFocusedField("")}
        />
        <span className={styles.errorMessage}>This field is required</span>
      </div>

      <div className={`${styles.formElement} ${styles.submitRow}`}>
        <button type="submit">
          <span className={styles.submitText}>Submit</span>{" "}
          <FontAwesomeIcon icon={["fas", "paper-plane"]} />
        </button>
      </div>
    </form>
  );
};

export default Form;
