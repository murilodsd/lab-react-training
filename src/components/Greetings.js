import './Greetings.css'

function Greetings (props) {

    const greetingMessages = {
        en: 'Hello',
        fr: 'Bonjour',
        de: 'Hallo',
        es: 'Holla'
    }

    return (
        <div className="greeting">
            <h1>{greetingMessages[props.lang]} {props.children}</h1>
        </div>
    )
}

export default Greetings;