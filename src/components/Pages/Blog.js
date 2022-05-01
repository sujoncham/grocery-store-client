import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
        <div className='row'>
            <h1>Blog page</h1>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
                <h3>Q. 1. Difference between javascript and nodejs</h3>
                <p>Ans.- </p>
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
            <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
            <h3>Q. 2. When should you use `nodejs` and when should you use `mongodb`</h3>
                <p>Ans.- </p>
                <p>- Nodejs হল একটি জাভাস্ক্রিপ্ট ইঞ্জিন, যা দিয়ে যেকোন অ্যাপ্লিকেশন লিখা যায়, যেখানে জাভাস্ক্রিপ্ট প্রোগ্রামিং ভাষা হিসেবে ব্যবহার করা হয় । এটি জাভাস্ক্রিপ্ট কোড পরিচালনা করে । সাধারণত, এটি এমন সার্ভার তৈরি করতে ব্যবহৃত হয় যা web request এর respond দিতে পারে, যদিও এটি অনেক অন্যান্য ধরণের কোডের জন্যও ব্যবহার করা হয়। </p>
                <p>- MongoDB একটি ডাটাবেস ইঞ্জিন। কিছু অ্যাপ্লিকেশন বা সার্ভারের মধ্যে কোড একটি ডাটাবেসে ডেটা save, search বা update করতে MongoDB ব্যবহার করে। NodeJs দিয়ে তৈরি অনেক ওয়েব সার্ভার আছে, যেগুলো ডাটা সংরক্ষণের জন্য MongoDB ব্যবহার করবে।</p>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
            <h3>Q. 3. Differences between `sql` and `nosql` databases.</h3>
                <p>Ans.- </p>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
            <h3>Q. 4. What is the purpose of `jwt` and how does it work</h3>
                <p>Ans.- </p>
            </div>

        </div>
        </div>
    );
};

export default Blog;