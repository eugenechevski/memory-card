import uniqid from 'uniqid';

const Card = (props: any) => {
    const icon = props.icon;
    const key = uniqid() as string;

    return (
        <div key={key} className="rounded-xl bg-neutral-content">
            <div className="text-xl text-black h-full w-full flex justify-center items-center">
                {icon}
            </div>
        </div>
    )
}

export default Card;