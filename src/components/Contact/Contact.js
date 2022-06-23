import { FaAddressBook } from "react-icons/fa";
import { TbBrandGithub, TbBrandGmail, TbPhoneIncoming } from "react-icons/tb";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="Contact">
      <div className="contact">
        <div className="contact-platform">Gmail</div>
        <TbBrandGmail size={50} />
        <div className="contact-info">jordana.urbaez@gmail.com</div>
      </div>
      <div className="contact">
        <div className="contact-platform">Github</div>
        <TbBrandGithub size={50} />
        <div className="contact-info">github.com/JordanUrbaezLu</div>
      </div>
      <div className="contact">
        <div className="contact-platform">Phone</div>
        <TbPhoneIncoming size={50} />
        <div className="contact-info">978-309-0667</div>
      </div>
      <div className="contact">
        <div className="contact-platform">Address</div>
        <FaAddressBook size={50} />
        <div className="contact-info">Boston, MA</div>
      </div>
    </div>
  );
};

export default Contact;
