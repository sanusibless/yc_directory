export default function User({ params }: { params: { id : string } }) {
    const { id } = params;

    return (
        
        <>
            <div>
                User Profile { id };
            </div>
        </>
    )
}