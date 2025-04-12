export default function PersonCard({ person }) {
    return <div>
        <h4>{person.name}</h4>
        <p>{person.role}, {person.country}</p>
        <p>{person.note}</p>
    </div>
}