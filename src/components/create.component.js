import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeNameMachine = this.onChangeNameMachine.bind(this);
    this.onChangeDataName = this.onChangeDataName.bind(this);
    this.onChangeTipeName = this.onChangeTipeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        name_machine: '',
        data_name: '',
        tipe_name:''
    }
  }
  onChangeNameMachine(e) {
    this.setState({
        name_machine: e.target.value
    });
  }
  onChangeDataName(e) {
    this.setState({
        data_name: e.target.value
    })  
  }
  onChangeTipeName(e) {
    this.setState({
        tipe_name: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
        name_machine: this.state.name_machine,
        data_name: this.state.data_name,
        tipe_name: this.state.tipe_name
    };
    axios.post('http://localhost:4000/business/add', obj)
        .then(res => console.log(res.data));
    
    this.setState({
        name_machine: '',
        data_name: '',
        tipe_name:''
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3>Add New Item Business</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Name Machine:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.name_machine}
                      onChange={this.onChangeNameMachine}
                      />
                </div>
                <div className="form-group">
                    <label>Data: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.data_name}
                      onChange={this.onChangeDataName}
                      />
                </div>
                <div className="form-group">
                    <label>Tipe: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.tipe_name}
                      onChange={this.onChangeTipeName}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" value="Submit" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}