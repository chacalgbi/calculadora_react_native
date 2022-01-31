import React, { useState } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';

export default App => {

	const [num1, setNum1] = useState(null);	
	const [num2, setNum2] = useState(null);
	const [display, setDisplay] = useState('0');
	const [current, setCurrent] = useState(0);
	const [operation, setOperation] = useState(null);

	function addDigit(n){
		if(display === '0' && n === '.'){ return }  // Se tiver 0 no começo, não colocar ponto...

		if(n === "+" || n === "-" || n === "/" || n === "*"){
			setCurrent(1)
		}

		if(current === 0 && display.indexOf(".") != -1 && n === '.'){ return } // Se já tem ponto e se vem mais...

		if(display === '0'){
			setDisplay(n);
		}else{
			setDisplay(display + n);
		}

	}

	function clearMemory(){
		setNum1(null)
		setNum2(null)
		setDisplay('0')
		setCurrent(0)
		setOperation(null)
	}

	function finalResult(op){
		let result = eval(display);
		setDisplay(result.toString())
	}

	return(
		<View style={styles.container}>
			<Display value={display} />
			<View style={styles.buttons}>
				<Button label='AC' onClick={ clearMemory } triple />
				<Button label='/'  onClick={ addDigit } operation />
				<Button label='7'  onClick={ addDigit } />
				<Button label='8'  onClick={ addDigit } />
				<Button label='9'  onClick={ addDigit }  />
				<Button label='*'  onClick={ addDigit } operation />
				<Button label='4'  onClick={ addDigit }  />
				<Button label='5'  onClick={ addDigit }  />
				<Button label='6'  onClick={ addDigit }  />
				<Button label='-'  onClick={ addDigit } operation />
				<Button label='1'  onClick={ addDigit }  />
				<Button label='2'  onClick={ addDigit }  />
				<Button label='3'  onClick={ addDigit }  />
				<Button label='+'  onClick={ addDigit } operation />
				<Button label='0'  onClick={ addDigit }  double />
				<Button label='.'  onClick={ addDigit } />
				<Button label='='  onClick={ finalResult } operation />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	buttons: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	}
});
