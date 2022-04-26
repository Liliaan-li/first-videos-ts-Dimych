import React from 'react';

const NewMessagesCounter = (props: any) => {
    return <div>{props.count}</div>
}
const UsersMem = (props: {users:Array<string>}) => {
    return <div>{props.users.map((u, i) =>
            <div key={i}>{u}</div>
    )}</div>
}
const Users = React.memo(UsersMem)
export const UseMemo = () => {
    return (
        <div>
            <NewMessagesCounter count={10}/>
            <Users users={['jfeo', 'dkf', 'skdv']}/>
        </div>
    );
};
