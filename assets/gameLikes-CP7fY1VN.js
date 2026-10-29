import{n as e}from"./AuthService-C8NFtVWb.js";import{t}from"./creators-tFepSIxT.js";async function n(t){let n=await e.auth.getUser();if(!n.data.user)throw Error(`Not authenticated`);let{data:r,error:i}=await e.from(`game_likes`).select(`*`).eq(`user_id`,n.data.user.id).eq(`game_id`,t).maybeSingle();if(i)throw i;if(r)throw Error(`Already liked`);let{error:a}=await e.from(`game_likes`).insert([{game_id:t,user_id:n.data.user.id,created_at:new Date().toISOString()}]);if(a)throw a}async function r(t){let n=await e.auth.getUser();if(!n.data.user)throw Error(`Not authenticated`);let{error:r}=await e.from(`game_likes`).delete().eq(`user_id`,n.data.user.id).eq(`game_id`,t);if(r)throw r}async function i(t){let n=await e.auth.getUser();if(!n.data.user)return!1;let{data:r,error:i}=await e.from(`game_likes`).select(`*`).eq(`user_id`,n.data.user.id).eq(`game_id`,t).maybeSingle();if(i)throw i;return!!r}async function a(t){let{count:n,error:r}=await e.from(`game_likes`).select(`*`,{count:`exact`,head:!0}).eq(`game_id`,t);if(r)throw r;return n||0}async function o(n=50,r=0){let i=await e.auth.getUser();if(!i.data.user)throw Error(`Not authenticated`);let{data:a,error:o}=await e.from(`game_likes`).select(`
      created_at,
      game:games!inner(
        id,
        title,
        description,
        thumbnail_url,
        like_count,
        view_count,
        creator_id
      )
    `).eq(`user_id`,i.data.user.id).order(`created_at`,{ascending:!1}).range(r,r+n-1);if(o)throw o;let s=a||[],c=await t(s.map(e=>e.game?.creator_id));return s.map(e=>({id:e.game.id,title:e.game.title,description:e.game.description,thumbnail_url:e.game.thumbnail_url,creator:e.game.creator_id?c[e.game.creator_id]??null:null,like_count:e.game.like_count,view_count:e.game.view_count,liked_at:e.created_at}))}export{r as a,n as i,o as n,i as r,a as t};