
import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


const App = () => {
  
    const [myOptions, setMyOptions] = useState([])
    
    const getDataFromAPI = () => {
      console.log("Options Fetched from API")
    
      fetch('http://dummy.restapiexample.com/api/v1/employees').then((response) => {
        return response.json()
      }).then((res) => {
        console.log(res.data)
        for (var i = 0; i < res.data.length; i++) {
          myOptions.push(res.data[i].employee_name)
        }
        setMyOptions(myOptions)
      })
    }