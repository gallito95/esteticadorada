import React from 'react'
import './calorieCounter.styles.scss'
import { useState } from 'react'

const CalorieCalculator = () => {


  const [weight, setWeight] = useState(70); // initial weight value
  const [height, setHeight] = useState(170); // initial height value
  const [age, setAge] = useState(25); // initial age value
  const [gender, setGender] = useState("male"); // initial gender value
  const [activityLevel, setActivityLevel] = useState(1.2); // initial activity level value
  const [trainingsPerWeek, setTrainingsPerWeek] = useState(1); // initial trainings per week value
  const [goal, setGoal] = useState("4");

  const calculateBMR = () => {
    let bmr = 0;
    if (gender === "male") {
      bmr = 66.5 + 13.8 * weight + 5 * height - 6.8 * age;
    } else {
      bmr = 655.1 + 9.6 * weight + 1.9 * height - 4.7 * age;
    }
    let totalCalories = Math.round(bmr* activityLevel)
  
  if (goal === '1') {
    totalCalories -= 600;
  } else if (goal === '2') {
    totalCalories += 300;
  } else if (goal === '3') {
    totalCalories -= 300;
  }
  totalCalories += 50*trainingsPerWeek
  return totalCalories;
    
  };

  const handleWeightChange = (event) => setWeight(event.target.value);
  const handleHeightChange = (event) => setHeight(event.target.value);
  const handleAgeChange = (event) => setAge(event.target.value);
  const handleGenderChange = (event) => setGender(event.target.value);
  const handleActivityLevelChange = (event) =>
    setActivityLevel(Number(event.target.value));
  const handleTrainingsPerWeekChange = (event) =>
    setTrainingsPerWeek(Number(event.target.value));

  return (
 
    <form >
    <h1 className="head__title">Calculadora de calorías</h1>
    <div className="layout-module">
    <div className="box a">
      <h3 className="title">Género</h3>
      <div className=" no-uppercase">
        <select className= "input__box__gender" name="gender" value={gender} onChange={handleGenderChange}>
        <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
     </div>
    </div>
    <div className="box b">
      <h3 className="title">Edad</h3>
      <input className= "input__box"type="number" name="age"  min="12" max="100" required="required"
      value={age} onChange={handleAgeChange}/>
    </div>
    <div className="box c">
      <h3 className="title">Altura</h3>
      <input className= "input__box" type="number" name="size"  min="100" max="240" required="required" value={height} onChange={handleHeightChange}/>
    </div>
    <div className="box d">
      <h3 className="title">Peso (Kg)</h3>
      <input className= "input__box" type="number" name="weight"  min="10" max="200" required="required" value={weight} onChange={handleWeightChange}/>
    </div>
    <div className="box e">
  <h3 className="title">Objetivo de formación</h3>
  <span className="optionSpecial">
  <input type="radio" namr="goal" checked={goal === '1'} onChange={(e) => setGoal("1")}/>
    <label ><span></span>Adelgazamiento rapido</label>
  </span>
  <span className="optionSpecial">
    <input type="radio"  name="goal" checked={goal === '2'} onChange={(e) => setGoal("2")} />
    <label ><span></span>Desarrollo Muscular</label>
  </span>
  <span className="optionSpecial">
    <input type="radio"  name="goal" checked={goal ==="3"} onChange={(e) => setGoal("3")} />
    <label><span></span>Definición Muscular</label>
  </span>
  <span className="optionSpecial">
    <input type="radio" name="goal" checked={goal === '4'} onChange={(e) => setGoal("4")} />
    <label><span></span>Fitness General</label>
  </span>
</div>

    <div className="box f">
      <h3 className="title">Actividad Física</h3>
      <fragment
          value={activityLevel}
          onChange={handleActivityLevelChange}
        >
      <span className="optionSpecial">
        <input value="1.2" type="radio" name="activity" />
        <label><span></span>En silla o en cama</label>
      </span>
      <span className="optionSpecial">
        <input type="radio" name="activity" value="1.45" />
        <label><span></span>Trabajo sentado sin moverse.</label>
      </span>
      <span className="optionSpecial">
        <input type="radio"  name="activity" value="1.65"/>
        <label for="stehend_und_gehend"><span></span>Trabajo sentado con moverse.</label>
      </span>
      <span className="optionSpecial">
        <input type="radio" name="activity" value="1.85"/>
        <label for="koerperlich_anstrengende_arbeit"><span></span> Trabajo de pie</label>
      </span>
      <span className="optionSpecial">
        <input type="radio" name="activity" value="2.1"/>
        <label for="koerperlich_anstrengende_arbeit"><span></span>  Trabajo  muy activo</label>
      </span>
 
      </fragment> 
    </div>
    <div className="box g">
      <h3 className="title">Entrenamiento por semana</h3>
      <fragment
      value={trainingsPerWeek}
      onChange={handleTrainingsPerWeekChange}>
      <div className="split">
        <span className="option">
          <input type="radio"  name="training" value="0" />
          <label ><span></span>0</label>
        </span>
        <span className="option">
          <input type="radio" name="training" value="1"/>
          <label><span></span>1</label>
        </span>
        <span className="option">
          <input type="radio"name="training" value="2"/>
          <label ><span></span>2</label>
        </span>
        <span className="option">
          <input type="radio" name="training" value="3"/>
          <label ><span></span>3</label>
        </span>
        <span className="option">
          <input type="radio" name="training" value="4"/>
          <label ><span></span>4</label>
        </span>
        <span className="option">
          <input type="radio" name="training" value="5"/>
          <label ><span></span>5</label>
        </span>
        <span className="option">
          <input type="radio" name="training" value="6"/>
          <label ><span></span>6</label>
        </span>
        <span className="option">
          <input type="radio" name="training" value="7"/>
          <label ><span></span>7</label>
        </span>
      </div>
      </fragment>
    </div>
    <div className="box h">
      <button type="button" className="button main">{calculateBMR()} Calorias</button>
    </div>
    </div>
  </form>
  )
}

export default CalorieCalculator