mc.listen('onPlayerDie', (pl) => {
	log('pl.realName=' + pl.realName + '。');
	if(!pl.realName) return;

	mc.runcmd('tellraw @a[name="' + pl.realName + '"] {"rawtext":[{"text":"你的死亡点在 '+parseInt(pl.pos.x)+'  '+parseInt(pl.pos.y)+'  '+parseInt(pl.pos.z)+'§r"}]}');
	mc.runcmd('playsound ambient.weather.thunder @a');
	setTimeout(function () {
                mc.runcmd('scoreboard players remove ' + pl.realName + ' money 1');
		mc.runcmd('tellraw @a {"rawtext":[{"text":"震惊了！一个玩家不幸地去世了，他失去了1金币作为他的医疗费！"}]}');
        }, 16000);
})
log('死亡插件 by shulinbao');