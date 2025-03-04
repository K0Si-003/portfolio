const markers = [
    {
        position: [800, 100, 500],
        rotation: [Math.PI / 4, Math.PI / 4, 0],
        text: <p>On se retrouve près de chez moi pour un café ? Tu peux aussi me joindre par mail <a className="modal__link" href="mailto:hugo.pioda@gmail.com">hugo.pioda@gmail.com</a></p>,
        color: 'hsl(12.88, 87.21%, 57.06%)'
    },
    {
        position: [350, 100, 1475],
        rotation: [0, -Math.PI / 2, 0],
        text: <p>
            En route pour la salle d'escalade. Direction le pan pour travailler la rési.
        </p>,
    },
    {
        position: [-1125, 100, -1685],
        rotation: [0, -Math.PI / 2, 0],
        text: <p>
            Quoi de mieux qu'une vue Mont Blanc en direct de notre belle ville.
        </p>,
    },
    {
        position: [2300, 100, 1000],
        rotation: [0, Math.PI / 3, 0],
        text: <p>
            Une petite pétanque au soleil ?
        </p>,
    },
]

export default markers