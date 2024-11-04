import EmailInput from "./EmailInput"

import { useConfrimCodeMutation, useConfrimPasswordMutation, useForgetPasswordMutation } from "../../app/services/mutation"
import { OTPInput } from "./OTPInput"
import ChangePassword from "./ChangePassword"
import { useNavigate } from "react-router-dom"

const Index = () => {
  const navigator = useNavigate();
  const { isSuccess, mutate, isError,error, isPending }=useForgetPasswordMutation()
  const { data,isSuccess:isSuccessConfrim, mutate:mutateConfrim, isError:isErrorConfrim,error:errorConfrim, isPending:isPendingConfrim}=useConfrimCodeMutation()
  const { isSuccess:isSuccessPassword, mutate:mutatePassword, isError:isErrorPassword,error:errorPassword, isPending:isPendingPassword}=useConfrimPasswordMutation()
   if(isSuccessPassword){
     navigator('/login')
   }
  
  return (
    <div className="py-24  mx-auto max-w-[500px] px-2">
         {!isSuccess?(
        <EmailInput mutate={mutate} isPending={isPending} isError={isError} error={error}/>
         ):!isSuccessConfrim?(
          <OTPInput mutate={mutateConfrim}  isPending={isPendingConfrim} isError={isErrorConfrim} error={errorConfrim}/>
         ):(<ChangePassword mutate={mutatePassword} token={data.data.token} isPending={isPendingPassword} isError={isErrorPassword} error={errorPassword}/>)}
        
    </div>
  )
}

export default Index