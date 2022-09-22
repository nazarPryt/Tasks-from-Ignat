// вот вам функция для сохранения объектов в память браузера
// (данные в этом хранилище сохраняться даже при перезагрузке компа):
export function saveState(key: string, state: string) {
    const stateAsString = JSON.stringify(state)
    localStorage.setItem(key, stateAsString)
}

// и вот вам функция для получения сохранённого объекта в памяти браузера:
export function restoreState(key: string) {
    let stateAsString = localStorage.getItem(key)
    if (stateAsString !== null) {
        stateAsString = JSON.parse(stateAsString)
        return stateAsString
    }
    alert('You have to save value first')
}

// // ---------------------------------------------------------------------------------------------------------------
// // пример использования:
// type StateType = {
//     x: string
//     y: number
// }
//
// // сохраняем объект типа StateType в ячейке 'test'
// saveState<StateType>('test', {x: 'A', y: 1})
//
// // получем в переменную state объект из ячейки 'test' или дэфолтный объект если ячейка пуста
// const state: StateType = restoreState<StateType>('test', {x: '', y: 0})
