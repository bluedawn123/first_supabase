import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { supabase } from "../supabase";
import { useNavigate } from "react-router-dom";
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

const Insert = () => {
    const [session, setSession] = useState(null)

    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
      })

      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })

      return () => subscription.unsubscribe()
    }, [])

    const navigate = useNavigate(); //초기화
    const [data, setData] = useState({
        title : '',
        content : '',

    });

    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        let {name, value} = e.target;
        setData({
            ...data,
            [name] : value
        })
    }

    const handleFileChange = (e) => {
        const attachFile = e.target.files[0];
        setFile(attachFile);
    }


    // Upload file using standard upload
    async function uploadFile(file) {
        const fileName = `${Date.now()}-${file.name}`
        const filePath = `thumbnail/${fileName}`;
        const { data, error } = await supabase.storage.from('project').upload(filePath, file)

        if (error) {
            alert('업로드 실패');
            console.log(error);
        } else {
            alert('업로드 성공');
            console.log(data);
            //파일 경로를 출력해서 return
            return filePath;
        }
    }


  async function InsertData(e){
    e.preventDefault();
    let thumbnailPath = null;
    if(file){
        const uploadedFilePath = await uploadFile(file);
        if(uploadedFilePath){
            thumbnailPath = uploadedFilePath
        }
    }

    const { error } = await supabase
    .from('projects')
    .insert({ title: data.title, content: data.content, thumbnail: thumbnailPath })

    if(error){
        alert('입력 실패');
        console.log(error);
    }else{
        alert('입력 성공');
        // navigate('/');
    }
  }

  const handleSignOut = () => {
    supabase.auth.signOut()
    navigate('/');
  }


  if (!session) {
    return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />)
  }
  else {
    return (
        <div>
        <Header />
        <main class="content">
        <div class="container about_content shadow">
                <div class="form">
                    <h3 class="heading6">Project 입력~</h3>
                    <div class="contact_form">
                        <form action="" onSubmit={InsertData}>
                            <p class="field">
                                <label for="title">Title:</label>
                                <input type="text" id="title" name="title" placeholder="title" onChange={handleChange}/>
                            </p>
                            <p class="field">
                                <label for="project-desc">content:</label>
                                <textarea name="content" id="content" cols="30" rows="10" placeholder="project description" onChange={handleChange}></textarea>
                            </p>
                            <p class="field">
                                <label for="file">Available Budget:</label>
                                <input type="file" name="thumbnail" onChange={handleFileChange}/>
                            </p>
                            <p class="submit">
                                <input type="submit" class="primary-btn" value="입력"/>
                            </p>
                            <button type="button" onClick={handleSignOut}>로그아웃</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
        </div>
    );
    }
};

export default Insert;
