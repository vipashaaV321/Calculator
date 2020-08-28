import React, { useState, useRef, useEffect } from 'react';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import logo from './logo.svg';
import { CSVLink, CSVDownload } from 'react-csv';
import './App.css';
import web from './img/calc.gif';
import NavBar from './navbar';
import Footer from './footer';
function App() {
  const [result, setResult] = useState("");
  const inputRef = useRef(null);
  const resultdata = "";
  const resultdata1 = [];
  var object = {};
  var json = [];
  useEffect(() => inputRef.current.focus());

  function handleClick(e) {
    setResult(result.concat(e.target.name))
  }
  function backspace() {
    setResult(result.slice(0, result.length - 1))
  }
  function clear() {
    setResult("")
  }
  function calculate() {
    try {
      var final = result.concat("=")
      setResult(final.concat(eval(result).toString()));
      var resultdata = final.concat(eval(result).toString())

    }
    catch (error) {
      setResult("Error")
    }

    console.log(resultdata)
    var resultdata1 = [resultdata]
    var object = {};
    resultdata1.forEach(function (res, key) {
      object[key] = resultdata1;
    });
    var json = JSON.stringify(object);


  }
  const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';

  const exportToCSV = (fileName) => {

    const ws = XLSX.utils.json_to_sheet(json);
    const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  }
  return (

    <div className="m">
      <NavBar />
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-lg-6 pt-3 pt-lg-5 order-2 order-lg-1 d-flex justify-content-center flex-column">

                  <h1>Do your Calculations<strong className="brand-name"> here!!</strong> </h1>

                  <div className="mt-3">

                  </div>
                </div>
                <div class="col-lg-6 order-1 order-lg-2 header-img pt-3 mx-auto">
                  <img src={web} className="img-fluid animated" alt="home-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-lg-6 pt-3 pt-lg-5 order-2 order-lg-2 d-flex justify-content-center flex-column">
                  <h2 className="text-center">Features</h2>
                  <br/>
                <ol class="step pl-0">
          <li class="step-element pb-0">
            <div class="step-number">
              <span class="number">1</span>
            </div>
            <div class="step-excerpt">
              <h6 class="font-weight-bold dark-grey-text mb-3">Addition,Subtraction,Multiplication,Division</h6>
              <p class="text-muted"><h3><strong>+,-,*,/</strong></h3></p>
            </div>
          </li>
          <li class="step-element pb-0">
            <div class="step-number">
              <span class="number">2</span>
            </div>
            <div class="step-excerpt">
              <h6 class="font-weight-bold dark-grey-text mb-3">Reminder</h6>
              <p class="text-muted"><h5><strong>3%2=1</strong></h5></p>
            </div>
          </li>
          <li class="step-element pb-0">
            <div class="step-number">
              <span class="number">3</span>
            </div>
            <div class="step-excerpt">
              <h6 class="font-weight-bold dark-grey-text mb-3">Powers</h6>
              <p class="text-muted"><h5>Eg::<strong className="m-3">2**2= 2^2=4 , 2**3= 2^3=8</strong></h5></p>
            </div>
          </li>
        </ol>

                  <div className="mt-3">

                  </div>
                </div>
                <div class="col-lg-6 order-1 order-lg-1 header-img pt-3 pb-5">
                  <div className="cApp">
                    <form>
                      <input type="text" value={result} ref={inputRef} onBlur={handleClick}></input>
                    </form>
                    <div className="keypad">
                      <button id="clear" onClick={clear}>C</button>
                      <button id="backspace" onClick={backspace} id="b"><i className="fas fa-backspace"></i></button>
                      <button name="%" onClick={handleClick} id="o">%</button>
                      <button name="/" onClick={handleClick} id="o">/</button>

                      <button name="7" onClick={handleClick}>7</button>
                      <button name="8" onClick={handleClick}>8</button>
                      <button name="9" onClick={handleClick}>9</button>
                      <button name="+" onClick={handleClick} id="o">+</button>
                      <button name="4" onClick={handleClick}>4</button>
                      <button name="5" onClick={handleClick}>5</button>
                      <button name="6" onClick={handleClick}>6</button>
                      <button name="-" onClick={handleClick} id="o">-</button>
                      <button name="1" onClick={handleClick}>1</button>
                      <button name="2" onClick={handleClick}>2</button>
                      <button name="3" onClick={handleClick}>3</button>
                      <button name="*" onClick={handleClick} id="o">*</button>
                      <button name="0" onClick={handleClick}>0</button>
                      <button name="." onClick={handleClick}>.</button>


                      <button id="result" onClick={calculate}> <i className="fa fa-pencil-square" ></i> Result</button>
                      <CSVLink data={resultdata} id="do1">Download Records</CSVLink>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;









