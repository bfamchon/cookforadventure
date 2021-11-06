import colors from './colors';

const h1 = `
    font-family: 'Oswald', sans-serif;
	text-shadow: 1px 1px 15px black;
    color: white;
    font-size: 70px;
	text-align: center;
`;

const h2 = `
	font-family: 'EB Garamond', sans-serif;
	text-shadow: 1px 1px 5px black;
	text-align: center;
	color: white;
	font-size: 30px;
	font-weight: 400;
	font-style  : oblique;

`;

const h3 = `
	font-family: 'Oswald', sans-serif;
	text-align: center;
    font-size: 28px;
    font-weight: 700;
	letter-spacing: 1px;
	text-transform: uppercase;
`;

const h4 = `
	font-family: 'Oswald', sans-serif;
	text-align: center;
    font-size: 22px;
    font-weight: 700;
	letter-spacing: 1px;
	text-transform: uppercase;
	margin: 5px;
`;

const text = `
	font-family: 'OpenSans', sans-serif;
	font-size: 17px;
`;

const p = `
	font-family: 'OpenSans', sans-serif;
	text-align: center;
	font-size: 20px;
	line-height: 28px;
    margin: 0 0 25px 0;
`;

const footer = `
	font-family: 'Oswald', sans-serif;
	text-align: center;
    font-size: 20px;
    font-weight: 400;
	letter-spacing: 1px;
	text-transform: uppercase;
`;

const button = `
	cursor: pointer;
	box-shadow:inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);
	border-width: 0;
	background-color: ${colors.BROWN};
	color: white;
	align-items: center;
	justify-content: center;
	border-radius: 5px;
	font-family: Open Sans, sans-serif;
	text-transform: uppercase;
	font-size: 1em;
	text-align: center;
	padding : 10px 25px;

	:disabled {
		background-color: ${colors.LIGHT_BROWN};
		cursor: not-allowed;
	}

    :active {
        box-shadow:inset 0 -0.4em 0 -0.30em rgba(0,0,0,0.17);
        background-color: ${colors.BROWN};
        color: rgba(255,255,255,0.8);
    }

	& > * {
		cursor: pointer;
	}
`;

const buttonDanger = `
	${button}
	background-color: ${colors.RED};

	:active {
        background-color: ${colors.RED};
	}
	
	:disabled {
		background-color: ${colors.RED};
	}
`;

const input = `
    max-width: 300px;
    height: 45px;
    padding: 0 20px;
`;

const a = `
	font-family: 'OpenSans', sans-serif;
	font-weight: 400;
	
	:active {
		color: red;
	}
`;

const ul = `
	font-family: 'OpenSans', sans-serif;
	align-self: center;
	font-size: 20px;
	line-height: 28px;
`;

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
};

export default {
    h1,
    h2,
    h3,
    h4,
    p,
    text,
    footer,
    button,
	buttonDanger,
	size,
    colors,
    device,
	input,
	a,
	ul,
}