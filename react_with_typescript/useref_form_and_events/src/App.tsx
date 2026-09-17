import ContactForm from "./components/ContactForm";
import EventHandling from "./components/EventHandling";
import FocusInput from "./components/FocusInput";
import Form from "./components/Form";

const App = () => {
  return (
    <div>
      <Form />
      <FocusInput />
      <hr />

      <ContactForm />

      <hr />

      <EventHandling />
    </div>
  );
};

export default App;
