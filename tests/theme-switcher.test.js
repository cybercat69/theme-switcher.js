const ThemeSwitcher = require('../js/theme-switcher');
const a = require('../js/theme-switcher');


describe("ThemeSwitcher:", () => {
    let switcher = new ThemeSwitcher();

    test('returns object', () => {
        expect(switcher).toBeInstanceOf(Object)
    })

})

