function DropDown({ countries, handleCountryChange }) {
    return (
        <>
            <select
                name="country"
                id="country"
                onChange={(e) => handleCountryChange(e)}
                defaultValue=""
            >
                <option value="">Select a country</option>
                {countries.map((country) => (
                    <option key={country.isoCode} value={country.isoCode}>
                        {country.name}
                    </option>
                ))}
            </select>
        </>
    );
}

export default DropDown;
