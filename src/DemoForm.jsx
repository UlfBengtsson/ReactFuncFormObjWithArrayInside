import React from "react";

const DemoForm = () => {
  const initPerson = {
    firstName: "",
    lastName: "",
    skills: [],
  };

  const [person, setPerson] = React.useState(initPerson);
  const [skill, setSkill] = React.useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    /*
        Get in a good habit of creating a clone or deep-copy of the state, and then updating that.
        Try something like this instead. In the below, we use the spread operator {...} to clone the state before updating it:
    */
    let newPerson = { ...person };

    newPerson[name] = value;

    setPerson(newPerson);
  }

  function handleChangeSkill(event) {
    setSkill(event.target.value);
  }

  function handleAdd() {
    const newPerson = { ...person };

    newPerson.skills = person.skills.concat(skill);
    setSkill("");
    setPerson(newPerson);
  }

  return (
    <form>
      <input
        type="text"
        name="firstName"
        value={person.firstName}
        placeholder="First name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        value={person.lastName}
        placeholder="Last name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="skill"
        value={skill}
        placeholder="Skill"
        onChange={handleChangeSkill}
      />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
      <ul>
        {person.skills.map((item, index) => (
          <li key={index} id={"skill" + index}>
            {item}
          </li>
        ))}
      </ul>
    </form>
  );
};

export default DemoForm;
