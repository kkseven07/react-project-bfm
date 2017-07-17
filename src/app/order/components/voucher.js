import React from 'react';
import './voucher.css';
import { Button, Input, ErrorText } from "../../shared";

export default ({actions, voucher}) => {
	return (
		<div // VAUCHER
	        style={{display:'flex', width:'90%', maxWidth:'500px', padding:'20px 0', justifyContent:'center',
	            alignItems:'center', flexDirection:'column', fontFamily:'RobotoRegular'
	        }}
	        
	    >
	    	<div style={{fontSize:'1em', fontFamily:'RobotoRegular'}}>Есть промокод? Введите и получите скидку.</div>
	    	<div 
				style={{display:'flex', width:'100%', maxWidth:'500px', padding:'20px 0', justifyContent:'space-between',
	            			alignItems:'flex-start', flexDirection:'row'
	        	}}
	        	styleName="promo"
	    	>
		        <div style={{width:'20%'}}>
		            <Input
		                maxLength={6}
		                placeholder="1A2B3C"
		                field={voucher.voucherField}
		                fieldType={"voucherField"}
		                enter={actions.voucherInput}
		            />
		            <ErrorText text={voucher.voucherField.errorText} />
		        </div>
	        
		        <Button 
		            click={() => 
		            	{
		                	actions.validateVaucher();
		                	
		                }
		                // this.setState({showConfirm:true})
		        }>Применить</Button>
	        </div>
	    </div>
	);
}