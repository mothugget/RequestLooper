import TextInput from "../TextInput"

function Request(){
return (
    <div>
        <TextInput 
        error= {false}
        type={'text'}
        label={'label'}
        value={'value'}
        name={'name'}
        placeholder={'placeholder'}
        onChange={e=>console.log(e)}
        disabled={false} ></TextInput>
    </div>
)
}

export default Request