export default function Tasks({ tasks, deleteTask }) {
  return (
    <div>
      {tasks?.map((task) => (
        <div key={task.id}>
          <p>Задача: {task.name ?? task.text ?? 'Без названия'}</p>
          <p>
            Активность:{' '}
            {String(task.status) === 'true' ? 'Активна' : 'Не активна'}
          </p>
          <p>Категория: {task.category ?? 'Не указана'}</p>
          <p>Дата: {task.date || 'Не указана'}</p>
          <button onClick={() => deleteTask(task.id)}>Удалить</button>
        </div>
      ))}
    </div>
  );
}