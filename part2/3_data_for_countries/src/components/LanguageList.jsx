const LanguageList = ({ languages }) =>
    <ul>
        {languages.map(language =>
            <li key={language[0]}>
                {language[1]}
            </li>
        )}
    </ul>

export default LanguageList