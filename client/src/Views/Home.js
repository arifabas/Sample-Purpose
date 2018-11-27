import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';
import Particles from 'react-particles-js';
import DatePicker from 'react-date-picker';
import css from "../assets/css/style.scss";
import logo from "../assets/img/koinworks.png";
import { withSwalInstance } from 'sweetalert2-react';
import swal from 'sweetalert2';

const SweetAlert = withSwalInstance(swal);

const particlesArea = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 750
      }
    }
  }
}

class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      birthplace: '',
      birthdate: new Date(),
      address: '',
      file: '',
      mariagestatus: ''
    };
    
    this.handleFullName = this.handleFullName.bind(this);
    this.handleBirthPlace = this.handleBirthPlace.bind(this);
    this.handleBirthDate = this.handleBirthDate.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleMariageStatus = this.handleMariageStatus.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFullName(event){
    this.setState({
      fullname: event.target.value
    })
  }
  
  handleBirthPlace(event){
    this.setState({
      birthplace: event.target.value
    })
  }

  handleFile(event){
    this.setState({
      file: event.target.value
    })
  }

  handleAddress(event){
    this.setState({
      address: event.target.value
    })
  }

  handleMariageStatus(event){
    this.setState({
      mariagestatus: event.target.value
    })
  }

  handleBirthDate(date) {
    this.setState({
      date
    });
  }

  handleSubmit() {

    const self = this

    if (self.state.birthplace == '' || 
      self.state.fullname == '' || 
      self.state.address == '' || 
      self.state.file == '' || 
      self.state.mariagestatus == '') {
      
      swal({
        position: 'middle',
        type: 'error',
        title: 'Failed to save',
        showConfirmButton: false,
        timer: 1500
      });

    } else {
    
      axios({
        method: "post",
        url: 'http://localhost:4000/users/sign_up',
        data: {
          form: self.state
        }
      }).then((result) => {

        console.log(result)

        swal({
          position: 'middle',
          type: 'success',
          title: 'Your form has been saved',
          showConfirmButton: false,
          timer: 1500
        });

        self.setState({
          birthplace: '', 
          fullname: '', 
          address: '', 
          file: '', 
          mariagestatus: ''
        })
        
      }).catch((err) => {
        console.log(err)
      })  

    }

  }

  render(){
    return (
      <div className="koinworks-wrapper">
        <div className="koin-logo">
          <img src={logo} alt="KoinWorks" />
        </div>
        <div className="koin-block">
          <Form>
            <h1>Registration Form</h1>
            <FormGroup>
              <div className="row">
                <div className="col-12 col-sm-4 col-md-3">
                  <Label for="full-name">Full Name</Label>
                </div>
                <div className="col-12 col-sm-8 col-md-9">
                  <Input type="text" name="full-name" id="fullname" placeholder="eg: John Doe" required value={ this.state.fullname } onChange={ this.handleFullName } />
                </div>
              </div>
            </FormGroup>
            <FormGroup>
              <div className="row">
                <div className="col-12 col-sm-4 col-md-3">
                  <Label for="birthplace">Birthplace</Label>
                </div>
                <div className="col-12 col-sm-8 col-md-9">
                  <Input type="text" name="birthplace" id="birthplace" placeholder="eg: Jakarta" required value={ this.state.birthplace } onChange={ this.handleBirthPlace } />
                </div>
              </div>
            </FormGroup>
            <FormGroup>
              <div className="row">
                <div className="col-12 col-sm-4 col-md-3">
                  <Label for="birthdate">Birthdate</Label>
                </div>
                <div className="col-12 col-sm-8 col-md-9">
                <DatePicker
                  name="birthdate"
                  onChange={this.handleBirthDate}
                  value={this.state.birthdate}
                />
                </div>
              </div>
            </FormGroup>
            <FormGroup>
              <div className="row">
                <div className="col-12 col-sm-4 col-md-3">
                  <Label for="address">Address</Label>
                </div>
                <div className="col-12 col-sm-8 col-md-9">
                  <Input type="textarea" name="address" id="address" placeholder="eg: Jl. Lorem Ipsum Dollor Sit Amet" required value={ this.state.address } onChange={ this.handleAddress } />
                </div>
              </div>
            </FormGroup>
            <FormGroup>
              <div className="row">
                <div className="col-12 col-sm-4 col-md-3">
                  <Label for="upload-photo">Upload Photo</Label>
                </div>
                <div className="col-12 col-sm-8 col-md-9">
                  <Input type="file" name="file" id="file" value={ this.state.file } onChange={ this.handleFile } />
                </div>
              </div>
            </FormGroup>
            <FormGroup>
              <div className="row">
                <div className="col-12 col-sm-4 col-md-3">
                  <Label for="mariage-status">Mariage Status</Label>
                </div>
                <div className="col-12 col-sm-5 col-md-6">
                  <Input type="select" name="mariagestatus" id="mariage-status" value={ this.state.mariagestatus } onChange={ this.handleMariageStatus }>
                    <option value="" selected disabled>Please Choose</option>
                    <option>Single</option>
                    <option>Married</option>
                    <option>Separated</option>
                    <option>Divorced</option>
                  </Input>
                </div>
              </div>
            </FormGroup>
            <div>
              <Input type="button" name="submit" id="submit" className="submit" value="Submit" onClick={this.handleSubmit} />
            </div>
          </Form>   
        </div>
        <Particles 
          params={particlesArea}
        />
      </div>
    );
  };

}

export default Home