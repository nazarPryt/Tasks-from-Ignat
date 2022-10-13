import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeAC} from "./bll/themeReducer";
import {RootReducerType} from "./bll/store";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<RootReducerType>(state => state.theme)


    const dispatch = useDispatch()


    const onChangeCallback = (value: string) => {
        if (value === 'dark' || value === 'red' || value === 'some')
            dispatch(changeThemeAC(value))
        console.log(value)
    }

    return (
        <div className={s[theme + '']}>
            <hr/>
            <h2 className={s[theme + '-text']}>
                homeworks 12
            </h2>

            <SuperRadio options={themes} onChangeOption={onChangeCallback} />
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <p className={s[theme + '-text']}><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A expedita inventore ipsa laboriosam maiores provident quas, recusandae tempora. Aut deserunt dolorem eaque enim ipsam iure labore placeat provident qui tempore!</span><span>Alias asperiores aut autem blanditiis dolorem doloribus ducimus eius esse, et excepturi expedita fuga illum ipsam iure, iusto magni maxime nihil nostrum, odit optio quasi recusandae repellat sequi voluptas voluptatibus?</span><span>Amet architecto atque blanditiis, culpa deserunt dolor error illo incidunt odit officia reprehenderit rerum ullam unde voluptatem voluptatum. Cum dolore eligendi impedit iure necessitatibus porro quis quisquam reiciendis sunt voluptatum!</span><span>Aliquid atque blanditiis, consectetur culpa cum dicta dolores eos esse excepturi harum ipsum iste modi natus nihil officia possimus praesentium quo temporibus unde vel. Delectus eligendi maiores nam quasi quisquam!</span><span>Accusantium aspernatur autem commodi cum debitis, ducimus eius esse incidunt ipsum itaque labore nesciunt nisi nobis non placeat porro possimus quam quibusdam quidem rem, sed suscipit, ut vel veniam voluptatibus.</span><span>A ab blanditiis culpa cumque dignissimos expedita id necessitatibus, nobis non officiis pariatur provident quae rem sunt unde ut velit voluptate. Fugit impedit iusto magni possimus quaerat quisquam quos voluptatem.</span><span>Aperiam eaque error expedita iure nostrum quidem reprehenderit sed sunt. Adipisci aut, culpa delectus excepturi iure laudantium molestias mollitia sint tenetur? Asperiores delectus fugiat laudantium porro quae quis recusandae voluptate.</span><span>Accusamus commodi cumque eaque earum mollitia odio quam rem ullam? Accusantium ad aut culpa dignissimos explicabo ipsa ipsum iusto, molestiae mollitia nostrum, quae, rem sapiente similique. Animi illo quis tempore?</span><span>Ad ducimus error excepturi fugit hic incidunt iste iusto non quae, reiciendis. Dolores, porro, reiciendis. Laboriosam quas rem tempore. Corporis debitis est iusto nostrum voluptates! At expedita odit perferendis rem!</span><span>Alias consequuntur, deserunt dolores earum, error impedit ipsam laboriosam mollitia nam numquam odit perspiciatis placeat praesentium quia ratione repellendus sapiente unde vitae. Eligendi exercitationem itaque laboriosam maxime molestiae soluta veniam!</span>
            </p>
            <hr/>
        </div>
    );
}

export default HW12;
