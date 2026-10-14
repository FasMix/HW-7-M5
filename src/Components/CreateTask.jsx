import axios from 'axios';
import {useForm} from 'react-hook-form'

export default function CreateTask({getTasks}) {
    const {handleSubmit, register, reset} = useForm()

    const handlerForm = (data) => {
        axios.post('http://localhost:8000/tasks', data)
        .then(() => {
            getTasks();
            reset();
        })
        .catch((e) => console.log(e))
    }

  return (
    <form onSubmit={handleSubmit(handlerForm)}>
        <input type="text" {...register('name')} placeholder='Задача'/>
        <select {...register('status')} id="status">
            <option value="true">Активна</option>
            <option value="false">Не активна</option>
        </select>
        <select {...register('category')}>
            <option value="Учёба">Учёба</option>
            <option value="Работа">Работа</option>
            <option value="Личное">Личное</option>
        </select>
        <input type="date" {...register('date')} />
        <button type="submit">Add</button>
    </form>
  )
}
