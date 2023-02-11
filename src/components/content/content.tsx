
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';
import './content.css';
import { AppState } from '../../redux/store';
import React, { useState, useEffect } from 'react';
import getTaskList from './contentservice';
import image from './displaypicture.png';
import { AnyMap } from 'immer/dist/internal';


interface Task {
    taskid: number;
    tasktitle: string;
    taskdescription: string;
    taskstartdatetime: string;
    taskenddatetime: string;
    tasktypetitle: string;
    prioritytype: string;
    statustitle: string;
  }



const Content = (props:any) => {
    const [taskList, setTaskList] = useState<Task[]>([]);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);



    const handleClick = () => {
        setOpen(!open);
      };


    useEffect(() => {
        const fetchTaskList = async () => {
            try {
                const response = await getTaskList();
                // eslint-disable-next-line no-console
                console.log('response',response);
                setTaskList(response.data);
                // eslint-disable-next-line no-console
                console.log('taskList',taskList);
                navigate('/home');
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error(error);
            }
        };
        fetchTaskList();
    }, []);


    return (
        <>
        {taskList.map((task:any) => (
        <div className="test" key={task.taskid}>
            <div className={`container ${open ? 'expand' : ''}`} onClick={handleClick} id="boxshape">
                <div className="upper">
                    <p className="datehead">start date</p>
                    <h3 className="upperdata">
                    {task.taskstartdatetime}
                    </h3>

                    <p>Task Title</p>
                    <h3 className="upperdata">
                    {task.tasktitle}
                    </h3>
                    <Button className ='mr-2' id="delete-button" variant="danger">
                        <RiDeleteBin5Line/></Button><span> &nbsp;&nbsp;</span>
                    <Button className ='mr-2' id="edit-button" variant="info" ><FaEdit/></Button>
                </div>
                <div className="lower">
                    <p>Task description</p>
                    <h3>
                    {task.taskdescription}
                    </h3>

                    <p>end date</p>
                    <h3>
                    {task.taskenddatetime}
                    </h3>
                    <p>Task Type</p>
                    <h3>
                    {task.tasktypetitle}
                    </h3>
                    <p>Task Priority</p>
                    <h3>
                    {task.prioritytype}
                    </h3>

                    <p>Task Status</p>
                    <h3>
                    {task.statustitle}
                    </h3>
                    <p>Task Id</p>
                    <h3>
                    {task.taskid}
                    </h3>

                </div>
            </div>
           </div>
         ))}
        </>
    );
};
export default Content;