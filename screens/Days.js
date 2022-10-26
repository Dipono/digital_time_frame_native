import React, { useState, useEffect } from "react";
import {
    View, Text, StyleSheet,
} from 'react-native';

export default function Days() {
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
    
   
    const [currentDay, setcurrentDay] = useState('')
  const [colorMon,setcolorMon] =useState('');
  const [colorTue,setcolorTue]=useState('');
  const [colorWed,setcolorWed] =useState('');
  const [colorThu,setcolorThu]=useState('');
  const [colorFri,setcolorFri] =useState('');
  
  
  const [mon,setMon] =useState('');
  const [tue,setTue] =useState('');
  const [wed,setWed] =useState('');
  const [thu,setThu] =useState('');
  const [fri,setFri] =useState('');
      const day = new Date().getDay();
      useEffect (()=>{
        
  setcurrentDay(days[day])
        
        if(day===1)
        {
          setcolorMon('#00BEBE')
          setMon(currentDay) 
         
        }else{
          setcolorMon('#308989')
          setMon(days[1]) 
        }
  
        if(day===2)
        {
          setcolorTue('#00BEBE')
          setTue(currentDay) 
          
        }else{
          setcolorTue('#308989')
          setTue(days[2]) 
        }
  
        if(day===3)
        {
          setcolorWed('#00BEBE')
          setWed(currentDay)  
          
        }else{
          setcolorWed('#308989')
          setWed(days[3]) 
        }
  
        if(day===4)
        {
          setcolorThu('#00BEBE')
          setThu(currentDay)  
          
        }else{
        setcolorThu('#308989')
          setThu(days[4]) 
        }
  
        if(day===5)
        {
          setcolorFri('#00BEBE')
          setFri(currentDay)  
          
        }else{
          setcolorFri('#308989')
          setFri(days[5]) 
        }
      })
     


return(
    <View style={styles.dayContainer}>
        <View style={{  width: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100 / 2,
        backgroundColor: colorMon,
        }}>
            <Text style={styles.innerLetter}>{mon}</Text>
        </View>
        <View style={{ width: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100 / 2,
        backgroundColor: colorTue,
        marginLeft: 20,}}>
            <Text style={styles.innerLetter}>{tue}</Text>
        </View>
    <View style={{width: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100 / 2,
        backgroundColor: colorWed,
        marginLeft: 20,}}>
            <Text style={styles.innerLetter}>{wed}</Text>
        </View>
        <View style={{ width: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100 / 2,
        backgroundColor: colorThu,
        marginLeft: 20,}}>
            <Text style={styles.innerLetter}>{thu}</Text>
        </View>
        <View style={{ width: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100 / 2,
        backgroundColor: colorFri,
        marginLeft: 20, }}>
            <Text style={styles.innerLetter}>{fri}</Text>
        </View>
    </View>
);
};

const styles = StyleSheet.create({
    dayContainer: {
        paddingLeft: 11,
        marginLeft: 10,
      /*   width: 125,
        height: 146, */
        flexDirection:'row' ,
        marginTop: 10,
    },
    innerLetter: {
        /* fontFamily: 'Encode Sans Condensed', */
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 30,
        color: '#FFFFFF',
    },
    
    
});
