import Banner from "@/components/Banner";
import Form from "@/components/Form";
import React from "react";

const Contact = () => {
  return (
    <section>
      <Banner text="Contact Us" />

      <div className="mt-36">
        <Form />
      </div>
    </section>
  );
};

export default Contact;
