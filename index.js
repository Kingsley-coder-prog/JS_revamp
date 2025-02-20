
export default function fight() {
    return 'fight!';
}

function fail() {
    try {
        throw new Error('fail');
        console.log('fail');
    } catch(error) {
        console.log(error.message);
    } finally {
        console.log('finally run it!');
        return 'still in business';
    }
}

fail();