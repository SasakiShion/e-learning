import {useState} from 'react';


const getData = () => {

    const [page, setPage] = useState(1);

    const current_data = getData.filter ((data) => {
        if (page === 1) {
            return data.Contents_ID === 1;
        } if (page === 2) {
            return data.Contents_ID === 2;
        }
           
        });

    return (
        <div>
            {current_data.map((data) => (
              <li key={data.Contents_ID} style={{listStyle:'none'}}>研修名：{data.ContentsName}　研修No：{data.ContentsCode}</li>
            ))}
        </div>

    );
}

export default getData;