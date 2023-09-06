import Card from 'react-bootstrap/Card'

type Task = {
    id: number,
    task: string
}

type TaskCardProps = {
    task: Task
}

export default function TaskCard({task}: TaskCardProps) {
  return (
    <Card key={task.id}>
        <Card.Body>
            <Card.Title>{task.task}</Card.Title>
        </Card.Body>
    </Card>
  )
}