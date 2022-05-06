import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
        <div className='row'>
            <h3 style={{color:'#04a565'}} className='mt-5 border-bottom'>JavaScript, NodeJs and Mongodb Blog</h3>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6 mt-5'>
                <h4 style={{color:'#04a565'}}>Q. 1. Difference between javascript and nodejs</h4>
                <p className='text-warning'>Ans. <i className="fa fa-hand-o-right"></i> </p>
                <ol>
                
                    <li>- Javascript মূলত ক্লায়েন্ট-সাইডে ব্যবহৃত হয়</li>
                    <li>- জাভাস্ক্রিপ্ট একটি প্রোগ্রামিং ভাষা যা স্ক্রিপ্টিং ভাষা হিসাবে পরিচিত</li>
                    <li>- জাভাস্ক্রিপ্ট ফ্রন্টএন্ড ডেভেলপমেন্টে ব্যবহার করা হয়।</li>
                    <li>- জাভাস্ক্রিপ্ট শুধুমাত্র ব্রাউজারে চালানো যেতে পারে।</li>
                </ol>
                <ol>
                
                    <li>- NodeJs একটি জাভাস্ক্রিপ্ট রানটাইম পরিবেশ।</li>
                    <li>- এটি মূলত সার্ভার-সাইডে ব্যবহৃত হয়।</li>
                    <li>- Nodejs সার্ভার-সাইড development ব্যবহার করা হয়</li>
                    <li>- আমরা NodeJS এর ​​সাহায্যে ব্রাউজারের বাইরে Javascript চালাতে পারি।</li>
                </ol>

            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6 mt-5'>
            <h4 style={{color:'#04a565'}}>Q. 2. When should you use NodeJs and when should you use MongoDb?</h4>
                <p className='text-warning'>Ans. <i className="fa fa-hand-o-right"></i> </p>
                <p> Nodejs হল একটি জাভাস্ক্রিপ্ট ইঞ্জিন, যা দিয়ে যেকোন অ্যাপ্লিকেশন লিখা যায়, যেখানে জাভাস্ক্রিপ্ট প্রোগ্রামিং ভাষা হিসেবে ব্যবহার করা হয় । এটি জাভাস্ক্রিপ্ট কোড পরিচালনা করে । সাধারণত, এটি এমন সার্ভার তৈরি করতে ব্যবহৃত হয় যা web request এর respond দিতে পারে, যদিও এটি অনেক অন্যান্য ধরণের কোডের জন্যও ব্যবহার করা হয়। </p>
                <p>- MongoDB একটি ডাটাবেস ইঞ্জিন। কিছু অ্যাপ্লিকেশন বা সার্ভারের মধ্যে কোড একটি ডাটাবেসে ডেটা save, search বা update করতে MongoDB ব্যবহার করে। NodeJs দিয়ে তৈরি অনেক ওয়েব সার্ভার আছে, যেগুলো ডাটা সংরক্ষণের জন্য MongoDB ব্যবহার করবে।</p>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6 mt-5 mb-5'>
            <h4 style={{color:'#04a565'}}>Q. 3. Differences between SQL and NOSQL databases.</h4>
                <p className='text-warning'>Ans. <i className="fa fa-hand-o-right"></i> </p>
                <p> SQL ডাটাবেসগুলি উল্লম্বভাবে স্কেলযোগ্য অর্থাৎ প্রসারিত হয় , যখন NoSQL ডেটাবেসগুলি অনুভূমিকভাবে স্কেলযোগ্য অর্থাৎ প্রসারিত হয়। SQL ডাটাবেসগুলি টেবিল-ভিত্তিক হয়, যখন NoSQL ডাটাবেসগুলি documents, key-value, graph, বা wide-কলাম স্টোর করে। SQL ডাটাবেসগুলি multi-row লেনদেনের জন্য ভাল, যখন documents বা JSON-এর মতো unstructured ডেটা এর জন্য NoSQL ভাল।</p>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6 mt-5 mb=5'>
            <h4 style={{color:'#04a565'}}>Q. 4. What is the purpose of JWT and how does it work?</h4>
                <p className='text-warning'>Ans. <i className="fa fa-hand-o-right"></i> </p>
                <p>JSON অবজেক্ট হিসাবে two parties এর মধ্যে নিরাপদে তথ্য প্রেরণের জন্য একটি compact এবং স্বয়ংসম্পূর্ণ উপায় হচ্ছে JWT। এবং এটা অবশ্যই open source। এই তথ্য যাচাই-বাচাই বিশ্বাসযোগ্য, কারণ এটি ডিজিটাল স্বাক্ষরিত এবং সুরক্ষিত। </p>
            </div>

        </div>
        </div>
    );
};

export default Blog;