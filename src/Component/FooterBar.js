import React from 'react'
import { NavLink } from 'react-router-dom'

const FooterBar = () => {
    return (
        <>
            <div className='d-flex justify-content-evenly pt-3' >
                {/* Home */}
                <NavLink to="/" className='d-flex flex-column align-items-center' style={{ cursor: "pointer", textDecoration: "none" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 32 32">
                        <path fill="black" d="M16.612 2.214a1.01 1.01 0 0 0-1.242 0L1 13.419l1.243 1.572L4 13.621V26a2.004 2.004 0 0 0 2 2h20a2.004 2.004 0 0 0 2-2V13.63L29.757 15L31 13.428ZM18 26h-4v-8h4Zm2 0v-8a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v8H6V12.062l10-7.79l10 7.8V26Z" />
                    </svg>
                    <p style={{ fontSize: ".6rem", color: "black" }}>Home</p>
                </NavLink>
                {/* Sale */}
                <NavLink to='/route' className='d-flex flex-column align-items-center' style={{ cursor: "pointer", textDecoration: "none" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 100 100">
                        <path fill="black" fill-rule="evenodd" d="M83.117 0c-6.88 0-12.698 4.735-14.379 11.092l-1.851-.86a2.5 2.5 0 0 0-2.108 0L34.166 24.453L3.553 10.233A2.5 2.5 0 0 0 0 12.5v70.287a2.5 2.5 0 0 0 1.447 2.268l31.666 14.709a2.5 2.5 0 0 0 2.108 0l30.613-14.22l30.613 14.22c1.657.769 3.553-.44 3.553-2.266V27.211a2.5 2.5 0 0 0-1.447-2.268l-3.23-1.502l1.011-1.722c.23-.417.413-.861.57-1.315A14.645 14.645 0 0 0 98 14.842C98 6.685 91.298 0 83.117 0m0 6.953c4.405 0 7.908 3.496 7.908 7.889c0 4.392-3.503 7.885-7.908 7.885s-7.908-3.493-7.908-7.885c0-4.393 3.503-7.889 7.908-7.889m-16.166 8.822l1.377.641a14.726 14.726 0 0 0 2.625 6.938l10.348 17.89c1.45 1.894 2.414 1.534 3.619-.1l7.857-13.373L95 28.805V93.58L67.322 80.723l-.226-39.676c.408.088.815.173 1.224.27l.92-3.891a63.862 63.862 0 0 0-2.168-.473zm-2.998.354l.115 20.336a33.73 33.73 0 0 0-3.113-.281l-.148 3.996c1.088.04 2.185.158 3.285.318l.23 40.234l-28.676 13.323l-.369-64.604zM5 16.418l27.275 12.67l.371 64.947L5 81.191zm51.543 20.039c-1.377.247-2.786.688-4.098 1.451a9.932 9.932 0 0 0-3.732 3.82l3.502 1.932a6.003 6.003 0 0 1 2.226-2.289l.006-.004l.006-.004c.807-.47 1.768-.786 2.797-.97zm16.666 2.031l-1.133 3.834c2.503.74 4.982 1.59 7.447 2.51l1.399-3.748c-2.532-.944-5.1-1.824-7.713-2.596m-26.002 7.596l-.03.158l-.003.014c-.499 2.831-.446 5.617-.334 8.265l3.996-.17c-.109-2.569-.132-5.055.277-7.388l.024-.125zm3.867 12.21l-3.99.27c.18 2.669.372 5.285.365 7.85l4 .01c.008-2.77-.195-5.478-.375-8.13m-3.824 11.89c-.11.953-.274 1.88-.514 2.77l-.002.005l-.002.008c-.35 1.335-.939 2.571-1.761 3.539l3.047 2.59c1.288-1.515 2.105-3.298 2.58-5.102l.002-.006c.3-1.116.495-2.24.623-3.35zm-33.768 3.898l-1.796 3.574c2.48 1.247 5.045 2.278 7.628 3.17l1.305-3.781c-2.455-.847-4.852-1.815-7.137-2.963m10.836 4.113l-1.064 3.856c2.646.731 5.366 1.312 8.146 1.625l.446-3.975c-2.521-.283-5.035-.817-7.528-1.506m18.141.282c-1.992 1.02-4.397 1.397-6.87 1.427l.05 4c2.834-.034 5.864-.444 8.642-1.867z" color="#ffffff" />
                    </svg>
                    <p style={{ fontSize: ".6rem", color: "black" }}>Route</p>
                </NavLink>

                {/* Category */}
                <div className='d-flex flex-column align-items-center' style={{ cursor: "pointer" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                            <circle cx="17" cy="7" r="3" />
                            <circle cx="7" cy="17" r="3" />
                            <path d="M14 14h6v5a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zM4 4h6v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" />
                        </g>
                    </svg>
                    <p style={{ fontSize: ".6rem", color: "black" }}>Category</p>
                </div>

                {/* New Arrival */}
                <NavLink to="/weather" className='d-flex flex-column align-items-center' style={{ cursor: "pointer", textDecoration: "none" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 20 20">
                        <path fill="black" d="M6.5 15h7a.5.5 0 0 1 .09.992L13.5 16h-7a.5.5 0 0 1-.09-.992zm-1.996-2h10.992c.278 0 .504.224.504.5c0 .245-.178.45-.413.492l-.09.008H4.503A.5.5 0 0 1 4 13.5c0-.245.178-.45.413-.492zM10 3c2.465 0 3.863 1.574 4.066 3.474h.062C15.714 6.474 17 7.711 17 9.237S15.714 12 14.128 12H5.872C4.286 12 3 10.763 3 9.237c0-1.47 1.192-2.671 2.697-2.758l.237-.005C6.139 4.561 7.535 3 10 3" />
                    </svg>
                    <p style={{ fontSize: ".6rem", color: "black" }}>Weather</p>
                </NavLink>

            </div>
        </>
    )
}

export default FooterBar
