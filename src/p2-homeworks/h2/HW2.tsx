import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = 'low' | 'high' | 'middle';
export type FilterType = 'all' | 'low' | 'high' | 'middle'
export type AffairType = Array<DataType>
export type DataType = {
    _id: number
    name: string
    priority: AffairPriorityType
}

const defaultAffairs: Array<DataType> = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

function HW2() {
    const [affairs, setAffairs] = useState<Array<DataType>>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')


    let filteredData = affairs
    if (filter === 'low') {
        filteredData = affairs.filter(el => el.priority === 'low')
    }
    if (filter === 'middle') {
        filteredData = affairs.filter(el => el.priority === 'middle')
    }
    if (filter === 'high') {
        filteredData = affairs.filter(el => el.priority === 'high')
    }


    function filterAffairs(filter: FilterType) {
        return setFilter(filter)
    }

    function deleteAffair(_id: number) {
        let delAff = affairs.filter(el => el._id !== _id)
        setAffairs(delAff)
    }

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredData}
                setFilter={filterAffairs}
                deleteAffair={deleteAffair}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )

}

export default HW2
